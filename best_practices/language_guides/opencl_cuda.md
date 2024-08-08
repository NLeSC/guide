# GPU Programming Languages

*Page maintainer: Alessio Sclocco* [@isazi](https://github.com/isazi)


## Learning Resources
 
* Carpentries GPU Programming course
  * [Lesson material](https://carpentries-incubator.github.io/lesson-gpu-programming/)
* Introduction to CUDA C
  * [Slides](http://developer.download.nvidia.com/compute/developertrainingmaterials/presentations/cuda_language/Introduction_to_CUDA_C.pptx)
  * [Video](http://on-demand.gputechconf.com/gtc/2012/video/S0624-Monday-Introduction-to-CUDA-C.mp4)
* Introduction to OpenACC
  * [Slides](http://developer.download.nvidia.com/compute/developertrainingmaterials/presentations/openacc/Introduction_To_OpenACC.pptx)
* Introduction to HIP Programming
  * [Video](https://www.youtube.com/watch?v=3ejUwypP0bI)
* SYCL Introduction and Best Practices
  * [Video](https://www.youtube.com/watch?v=TbkrODiVDQY)
* CSCS GPU Programming with Julia
  * [Course recordings](https://github.com/omlins/julia-gpu-course)
 
## Documentation

* CUDA
  * [C programming guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html)
  * [Runtime API](https://docs.nvidia.com/cuda/cuda-runtime-api/)
  * [Driver API](https://docs.nvidia.com/cuda/cuda-driver-api/index.html)
  * [Fortran programming guide](https://docs.nvidia.com/hpc-sdk/compilers/cuda-fortran-prog-guide/index.html)
* HIP
  * [Kernel language syntax](https://rocm.docs.amd.com/projects/HIP/en/latest/reference/kernel_language.html)
  * [Runtime API](https://rocm.docs.amd.com/projects/HIP/en/latest/.doxygen/docBin/html/modules.html)
* SYCL
  * [Specification](https://registry.khronos.org/SYCL/specs/sycl-2020/html/sycl-2020.html)
  * [Reference guide](https://www.khronos.org/files/sycl/sycl-2020-reference-guide.pdf)
* OpenCL
  * [Guide](https://github.com/KhronosGroup/OpenCL-Guide)
  * [API](https://registry.khronos.org/OpenCL/specs/3.0-unified/html/OpenCL_API.html)
  * [OpenCL C specification](https://registry.khronos.org/OpenCL/specs/3.0-unified/html/OpenCL_C.html)
  * [Reference guide](https://www.khronos.org/files/opencl30-reference-guide.pdf)
* OpenACC
  * [Programming guide](https://www.openacc.org/sites/default/files/inline-files/OpenACC_Programming_Guide_0_0.pdf)
  * [Reference guide](https://www.openacc.org/sites/default/files/inline-files/API%20Guide%202.7.pdf)
* OpenMP
  * [Reference guide](https://www.openmp.org/wp-content/uploads/OpenMPRef-5.0-111802-web.pdf)

## Overview of Libraries

* CUDA
  * [cuBLAS](http://docs.nvidia.com/cuda/cublas/index.html)
  * [NVBLAS](http://docs.nvidia.com/cuda/nvblas/index.html)
  * [cuFFT](http://docs.nvidia.com/cuda/cufft/index.html)
  * [cuGRAPH](https://docs.rapids.ai/api/cugraph/stable/)
  * [cuRAND](http://docs.nvidia.com/cuda/curand/index.html)
  * [cuSPARSE](http://docs.nvidia.com/cuda/cusparse/index.html)
* HIP
  * [hipBLAS](https://rocm.docs.amd.com/projects/hipBLAS/en/latest/index.html)
  * [hipFFT](https://rocm.docs.amd.com/projects/hipFFT/en/latest/index.html)
  * [hipRAND](https://rocm.docs.amd.com/projects/hipRAND/en/latest/index.html)
  * [hipSPARSE](https://rocm.docs.amd.com/projects/hipSPARSE/en/latest/index.html)
* SYCL
  * [OneAPI BLAS](https://www.intel.com/content/www/us/en/docs/onemkl/developer-reference-dpcpp/2024-0/blas-routines.html#GUID-F277361F-49BA-437B-8100-3D2B6BBC3CC1)
  * [OneAPI FFT](https://www.intel.com/content/www/us/en/docs/onemkl/developer-reference-dpcpp/2024-0/fourier-transform-functions.html#GUID-BB8891E9-D3D3-40B9-BBB1-2390C4340CDA)
  * [OneAPI sparse](https://www.intel.com/content/www/us/en/docs/onemkl/developer-reference-dpcpp/2024-0/sparse-blas-routines.html#GUID-7123D31B-9C7F-4BA7-9792-02A417293E60)
  * [OneAPI random number generators](https://www.intel.com/content/www/us/en/docs/onemkl/developer-reference-dpcpp/2024-0/random-number-generators.html#GUID-FFC80D12-C323-4A9F-83E3-D0ACDB686876)
* OpenCL
  * [CLBlast](https://github.com/CNugteren/CLBlast)
  * [clFFT](https://github.com/clMathLibraries/clFFT)

## Source-to-source Translation

* CUDA to HIP
  * [hipify](https://github.com/ROCm/HIPIFY)
* CUDA to SYCL
  * [SYCLomatic](https://github.com/oneapi-src/SYCLomatic)
* CUDA to OpenCL
  * [cutocl](https://github.com/benvanwerkhoven/cutocl)

## Foreign Function Interfaces

* C++
  * CUDA
    * [cudawrappers](https://github.com/nlesc-recruit/cudawrappers)
  * OpenCL
    * [CLHPP](https://github.com/KhronosGroup/OpenCL-CLHPP)
* Python
  * CUDA
    * [PyCuda](https://mathema.tician.de/software/pycuda/)
    * [CuPy](https://cupy.dev/)
    * [cuda-python](https://nvidia.github.io/cuda-python/)
  * HIP
    * [PyHIP](https://github.com/jatinx/PyHIP)
  * SYCL
    * [dpctl](https://github.com/IntelPython/dpctl)
  * OpenCL
    * [PyOpenCL](https://mathema.tician.de/software/pycuda/)
* Julia
  * CUDA
    * [CUDA.jl](https://github.com/JuliaGPU/CUDA.jl)
  * HIP
    * [AMDGPU.jl](https://github.com/JuliaGPU/AMDGPU.jl)
  * SYCL
    * [oneAPI.jl](https://github.com/JuliaGPU/oneAPI.jl)
* Java
  * CUDA
    * [JCuda](http://www.jcuda.org/)
  * OpenCL
    * [JOCL](http://www.jocl.org/)

## High-Level Abstractions

* C++
  * [Kokkos](https://github.com/kokkos/kokkos)
  * [Raja](https://github.com/LLNL/RAJA)
* Python
  * [Numba](https://numba.pydata.org/)
  * [pykokkos](https://github.com/kokkos/pykokkos)

## Debugging and Profiling Tools

* CUDA
  * [Nsight Systems](https://developer.nvidia.com/nsight-systems)
  * [Nsight Compute](https://developer.nvidia.com/nsight-compute)
  * [CUDA-GDB](http://docs.nvidia.com/cuda/cuda-gdb/index.html)
  * [compute-sanitizer](https://docs.nvidia.com/compute-sanitizer/index.html)
* HIP
  * [omniperf](https://github.com/AMDResearch/omniperf)
  * [rocprof](https://github.com/ROCm/rocprofiler)
* SYCL
  * [oneprof](https://github.com/intel/pti-gpu/tree/master/tools/oneprof)
  * [onetrace](https://github.com/intel/pti-gpu/tree/master/tools/onetrace)

## Performance Optimization

* [PRACE best practice guide on modern accelerators](https://zenodo.org/records/5839488)
* [CUDA best practices](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html)
* [OneAPI SYCL best practices](https://www.intel.com/content/www/us/en/docs/oneapi/programming-guide/2023-2/optimize-your-sycl-applications.html)

## Auto-tuning

* Kernel Tuner
  * [GitHub repository](https://github.com/KernelTuner/kernel_tuner)
  * [Documentation](https://kerneltuner.github.io/kernel_tuner/stable/)
  * [Tutorial](https://github.com/KernelTuner/kernel_tuner_tutorial)
