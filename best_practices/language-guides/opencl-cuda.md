# OpenCL & CUDA


## Sources for learning
 *please add university courses and informative videos*
 * Parallel Reduction [[Slides](http://developer.download.nvidia.com/compute/cuda/1.1-Beta/x86_website/projects/reduction/doc/reduction.pdf)]
 * GPU Memory bootcamp - Tony Scudiero [[git repo](https://github.com/tscudiero/MemBootcamp)]
   * Best Practices [[Slides](https://github.com/tscudiero/MemBootcamp/blob/master/Slides/S5353_Scudiero_Bootcamp1.pdf)] [[Video](http://on-demand.gputechconf.com/gtc/2015/video/S5353.html)]
   * Beyond the Best Practices [[Slides](https://github.com/tscudiero/MemBootcamp/blob/master/Slides/S5376-Scudiero_Bootcamp2.pdf)] [[Video](http://on-demand.gputechconf.com/gtc/2015/video/S5376.html)]
   * Collaborative Access Patterns [[Slides](https://github.com/tscudiero/MemBootcamp/blob/master/Slides/S6181-Scudiero_Bootcamp3.pdf)] [[Video](http://on-demand.gputechconf.com/gtc/2016/video/s6181-tony-scudiero-bootcamp-3.mp4)]
 * CUB: CUDA Collective primitives library [[Git](https://github.com/NVlabs/cub)] [[Slides](http://on-demand.gputechconf.com/gtc/2015/presentation/S5617-Duane-Merrill.pdf)] [[Video](http://on-demand.gputechconf.com/gtc/2015/video/S5617.html)]
 * Best Practices Guide by PRACE [[HTML](http://www.prace-ri.eu/best-practice-guide-gpgpu-january-2017/#gpu_programming)] [[PDF](http://www.prace-ri.eu/IMG/pdf/Best-Practice-Guide-GPGPU-1.pdf)]

## Documentation
* OpenCL specification [[1.2](https://www.khronos.org/registry/cl/sdk/1.2/docs/man/xhtml/)] [[2.0](https://www.khronos.org/registry/cl/sdk/2.0/docs/man/xhtml/)]
* CUDA Toolkit [[latest](http://docs.nvidia.com/cuda/index.html)]
   * [CUDA Programming Guide](http://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html)
   * [CUDA Runtime API](http://docs.nvidia.com/cuda/cuda-runtime-api/index.html)

   
## Source-to-source translation between CUDA and OpenCL
* vtsynergy (https://github.com/vtsynergy)
   * This was shown to work on DAS5 after copying /usr/include/limits.h to $PWD and commenting out the lines around # include_next (122-125) :    
   "cu2cl-tool host_code.cc device_code.cu  -- -DGPU_ON -I$PWD:/usr/include -I/usr/lib/gcc/x86_64-redhat-linux/4.8.2/include".
* cutocl (https://github.com/benvanwerkhoven/cutocl)

   
## Overview of libraries
* OpenCL-based libraries
  * [CLBlast](https://github.com/CNugteren/CLBlast)
  * [clFFT](https://github.com/clMathLibraries/clFFT)
* CUDA-based libraries
  * [cuBLAS](http://docs.nvidia.com/cuda/cublas/index.html)
  * [NVBLAS](http://docs.nvidia.com/cuda/nvblas/index.html)
  * [cuFFT](http://docs.nvidia.com/cuda/cufft/index.html)
  * [nvGRAPH](http://docs.nvidia.com/cuda/nvgraph/index.html)
  * [cuRAND](http://docs.nvidia.com/cuda/curand/index.html)
  * [cuSPARSE](http://docs.nvidia.com/cuda/cusparse/index.html)


## Foreign Function Interfaces for CUDA and OpenCL
 * C++: [[Cuda](https://github.com/eyalroz/cuda-api-wrappers/)], [[OpenCL](https://github.com/KhronosGroup/OpenCL-CLHPP)]
 * Python: [[PyCuda](https://mathema.tician.de/software/pycuda/)], [[PyOpenCL](https://mathema.tician.de/software/pycuda/)]
 * Java: [[JCuda](http://www.jcuda.org/)], [[JOCL](http://www.jocl.org/)]


## Testing
 * Unit Testing
    * Example of a unit test for CUDA kernel using the [Kernel Tuner](https://github.com/benvanwerkhoven/kernel_tuner/blob/master/examples/cuda/test_vector_add.py)
 * [comparing floating-point results](http://docs.nvidia.com/cuda/floating-point/index.html)


## Debugging and Profiling Tools
 * [Nvidia Visual Profiler](https://developer.nvidia.com/nvidia-visual-profiler) [[User Guide](http://docs.nvidia.com/cuda/profiler-users-guide)]
 * [CUDA-GDB](http://docs.nvidia.com/cuda/cuda-gdb/index.html)
 * [CUDA-MEMCHECK](http://docs.nvidia.com/cuda/cuda-memcheck/index.html)


## Performance Optimization
 * Resources:
     * Better Performance at Lower Occupancy [[Slides](http://www.nvidia.com/content/gtc-2010/pdfs/2238_gtc2010.pdf)] [[Video](http://on-demand.gputechconf.com/gtc/2010/video/S12238-Better-Performance-at-Lower-Occupancy.mp4)]
     * [Maxwell Tuning Guide](http://docs.nvidia.com/cuda/maxwell-tuning-guide)
     * [Pascal Tuning Guide](http://docs.nvidia.com/cuda/pascal-tuning-guide)

 * Generic Auto Tuners:
     * [Kernel Tuner](https://github.com/benvanwerkhoven/kernel_tuner) (Python)
     * [CLTune](https://github.com/CNugteren/CLTune) (C++)


