# XNAT pipelines on project level

The purpose of this document is to provide how to for running a pipeline on project level within the XNAT platform. This functionality is currently not supported by XNAT (up to v. 1.6.2), therefore this is not a generic solution, but a method to overcome the current limitation.

## What is XNAT?
XNAT is an open source imaging informatics platform, developed by the Neuroinformatics Research Group at Washington University (http://www.xnat.org/). It facilitates common management, productivity, and quality assurance tasks for neuro-imaging and associated data.

## XNAT data model
The core data-model used in XNAT is defined in an XSD schema: xnat.xsd. This schema is extended by other XSD schemas on a site by site basis to build customized representations of neuro-imaging data. There are three core data-types in the xnat.xsd: **Projects**, **Subjects** and **Experiments**. Most of the data-types in XNAT can be defined by their relationship to one of those core data-types.
### XNAT core data types

A **project** represents collection of data stored in XNAT. It is used to define the security structure of the data, which determines the access permissions, currently in terms of the roles owner, member, and collaborator.
**Subjects** participate in studies and are always associated with a concrete project.
An **experiment** is an event of data acquisition. It can contain imaging or non-imaging data. The experiment is also always connected to a concrete project.
A **subject assessment** is a specification of the experiment entity which is associated with a subject.
An **image session** is an extension of the subject assessment that captures the data acquired by imaging studies. It can contain scanned as well as processed image data.  It has extensions for MR, PET, and other kinds of image scans sessions.

### XNAT hierarchy

The XNAT data types are subject to a hierarchy as shown below:

    Project
        + Subject
            - Experiments
                + Imaging Sessions
                    - Scans
                    -...

This structure is usually used to store imaging data in XNAT. A project contains many subjects and a subject contains one or more imaging sessions.

## Running pipelines in XNAT

### Pipelines and pipeline engine

One of the core activities in XNAT is executing pipelines: mini-applications that can run complex processing on the project data. A pipeline is a workflow consisting of distinct steps. Each step of the pipeline usually invokes an executable or script for data processing. The pipeline  defines the order in which the steps should be executed along with the needed parameters. For full overview of how to create and install a pipeline in XNAT refer to the [online documentation](https://wiki.xnat.org/display/XNAT16/Installing+Pipelines+in+XNAT).

The pipeline is executed by the XNAT Pipeline Engine- a Java-based framework that links sequential activities into a defined process flow and manages how data moves from step to step in that flow based on the results of each step. The process flow is defined by an XML document, called pipeline descriptor and the executables are defined by the resource descriptors. The pipeline engine comes with the XNAT installation. To run a pipeline which interacts and updates XNAT, the pipeline launcher (PIPELINE_HOME/bin/XnatPipelineLauncher) should be used, along with the appropriate parameters.

Currently (up to XNAT version 1.6.2.1) XNAT supports execution of custom pipelines only at subject level. This is not convenient for large scale processing. The XNAT team is working on providing build-in functionality on project level, but meanwhile the[ NLeSc eCognition Biomarker boosting project](http://www.esciencecenter.nl/projects/project-portfolio/cognition/) needed a solution for overcoming this limitation, which is described in this document.

### Example pipeline

To illustrate how the pipeline should be specified in XNAT, let's consider an example. The data to be processed are image volumes of the subject's brain MRI scan(s) in DICOM (a common medical image format: http://dicom.nema.org/) or NIFTI  (http://nifti.nimh.nih.gov/) format.  If the input data are DICOM, it is converted to NIFTI. The processing consists of segmentation into 2 classes- foreground (FG) and background (BG). The segmentation is defined as simple thresholding with parameters threshold1 and threshold2. The FG consists of all voxels with gray levels in the interval [threshold1, threshold2], while the remaining voxels constitute the BG. The pipeline produces a NIFTI segmentation result and some PNG images, used for visual inspection of the segmentation quality. The main pipeline steps are shown in Figure 1.

[[attachments/SimplePipeline_smaller.png]]

Figure 1. Simple XNAT example pipeline

While very simplistic, this is a realistic example of the main processing steps of a pipeline for segmenting some brain structure of interest. The processing part of the pipeline is implemented as  collection of Python scripts (located at a [git repository](https://github.com/NLeSC/biomarker_boosting/tree/master/hippocampus_pipeline/simple_xnat_test_pipeline/bin)) which can be executed independently of XNAT on NIFTI data.

To be executed within XNAT the pipeline has to be described by the resource and pipeline descriptors (located at the [git repository](https://github.com/NLeSC/biomarker_boosting/tree/master/hippocampus_pipeline/simple_xnat_test_pipeline/bin, see also Appendix A). These descriptors are implemented for the standard manner in which a pipeline in executed in XNAT on subject level. The **<documentation>** section of the pipeline descriptor is connected with the generation of an editable by the user form as shown in Figure 2. After submitting the form, the pipeline is started and executed for the selected subject within  XNAT. The pipeline launcher is handling the pipeline execution which is hidden from the user.

[[attachments/XNATFormSbjLvl.png]]

Figure 2. XNAT simple pipeline form on subject level

## Running pipelines on project level

A current limitation of XNAT is that pipelines cannot be described and started on project level similarly to starting them on subject level. Within the Biomarker boosting project we have developed and tested a method for achieving this for the convenience of the user and to be able to scale up the processing of data from many subjects and many medical centers.

### Main idea

We wanted to provide a very similar manner (from the user perspective) of starting a pipeline for all subjects in a project. Therefore, we have decided to use the XNAT functionality for starting the pipeline from any chosen subject within the project of interest. The main idea is to construct a 'super pipeline' on project level which main step is to loop over all subjects of a project. This looping step then will call the pipeline launcher for each subject to execute the original processing pipeline. All the relevant parameters of the subject level  pipeline need to be submitted in the same form the user is used to, but now at project level. Using the XNAT data model (see XNAT hierarchy), one can derive information (using REST calls) for the project to which a given subject belongs to. For security and privacy reasons it is not  desirable to specify the project with its name/Id in the editable by the user pipeline parameters form.

### Implementation

The main step in the project level pipeline is a script which derives to which project, the subject from where the pipeline is invoked, belongs to. Then it loops over all subjects and invokes the pipeline launcher, which in turn invokes the subject level (original) pipeline for each subject. To ensure storing the results in the usual XNAT manner, we use the current time of execution for generating the name of the results directory.  We have chosen to use the REST functionality of the PyXNAT Python toolbox (https://pythonhosted.org/pyxnat/). These main steps are illustrated in the looping script in ( see Appendix A, the full code is available at the [git repository](https://github.com/NLeSC/biomarker_boosting/tree/master/hippocampus_pipeline/simple_xnat_test_pipeline/bin).

The looping script now is the main resource of the project level pipeline. The code of the resource descriptor is given in Appendix B, Resource descriptor (and also at the [git repository](https://github.com/NLeSC/biomarker_boosting/tree/master/hippocampus_pipeline/simple_xnat_test_pipeline/bin).

The main parts of the project level pipeline descriptor (see Appendix A, full code to be found at [git repository](https://github.com/NLeSC/biomarker_boosting/tree/master/hippocampus_pipeline/simple_xnat_test_pipeline/bin).
The project level pipeline, described in this way can be added to the XNAT in the same way a subject level pipeline is added and also is started the same way from any chosen subject of the project of interest. Starting the project level pipeline lets the user specify the parameters of the processing pipeline once at project level and have all subjects in the project processed with the subject level pipeline. The editable form generated for this example project level pipeline is shown in Figure 3.

[[attachments/XNATFormPrjLvl.png]]

Figure 3. XNAT form simple pipeline form on project level


***

## Appendix A. List of the example pipeline descriptors

Subject level:
* Resource descriptor: run_test_pipeline.xml
* Pipeline descriptor: simple_xnat_test_pipeline.xml

Project level:
* Looping script: loop_pipeline.py
* Resource descriptor: run_loop_pipeline.xml
* Pipeline descriptor: simple_xnat_test_pipeline_project_level.xml
