---
title: "High-Throughput Screening (HTS) System for Phenotyping Cardiovascular Drugs @ Novartis"
year: 2022
excerpt: <b>Oct 2020 - Jul 2022</b><br>I designed, built, and integrated a system to scale up automated cardiovascular drug phenotyping and screening.
collection: portfolio
image: '../images/portfolio/2022-07_novartis_hts_system/scientist_expt_rig.avif'
---

<hr>

**Project Timeline**: Oct 2020 - Jul 2022 (~1.5 years)

**Skills Used**: Creo Parametric (3D CAD), Altium Designer (PCB Design CAD), Analog and Digital Circuit Design, Oscilloscope, Arduino (C++), LabVIEW, National Instruments DAQ, Cleanroom Sputter Deposition, Fluorescence Microscopy (Calcium Imaging)

[**Link to article**](https://live.novartis.com/article/how-a-drug-target-challenge-gave-rise-to-a-powerful-technology-platform/intro) (*Images and quotes sourced from linked article unless otherwise specified.*)

**Mentors**: [Christopher Plunkett](https://www.linkedin.com/in/christopher-plunkett-85207664/), [Scott Hammack](https://www.linkedin.com/in/scott-hammack-b247b517/), [Pranjali Beri](https://www.linkedin.com/in/pranjali-beri-02584646/)

<hr>

![image of cardiomyocytes on posts]({{ site.baseurl }}/images/portfolio/2022-07_novartis_hts_system/posts.jpg)
<div align="center"><em>Human cardiomyocytes cultured on flexible silicone posts.</em></div>

## Context:

> About a decade ago, the cardiovascular research group at Novartis began investigating a potential drug target for heart failure. But while none of the available methods yielded useful results, a new approach for studying miniature muscles turned out to be a perfect match for what the group needed. The resulting mini-heart platform has since developed into a powerful research tool.

The cardiovascular research group at Novartis opted to use 3D organoids (human skin iPSC-derived cardiomyocytes) cultured on a pair of flexible silicone posts. This protocol allowed for imaging and <span class="highlight">measuring tissue contractility as a physiological readout</span> when subjecting the samples to novel drug candidates. In order to differentiate tissue culture into cardiomyocytes, scientists electrically stimulated the samples using electrodes.

## Problem:

When I joined the project, scientists were conducting these experiments on 96-well plates (shape: 8 rows by 12 columns), but they were only utilizing 8 of the wells per plate. This is because the electrical stimulator's form factor did not allow for utilizing all the wells of the plate. In other words, the stimulation tool was **too big** and had **too few electrodes**.

![image of 96 well plate]({{ site.baseurl }}/images/portfolio/2022-07_novartis_hts_system/96well.jpg)
<div align="center"><em>96-well plate (<a href="https://www.universalmedicalinc.com/brandtech-brandplates-96-well-plate-immunograde-polystyrene-non-sterile-treated-surface.html" target="_blank">source</a>).</em></div>

## Solution:

I proposed redesigning the system by allowing for electrical stimulation in all 96 wells. However, I encountered a few challenges:

**[temporarily redacted]**

<!---
1. Worst case, the system would only be hooked up to one function generator/stimulator (i.e. <span class="highlight">single-threaded signal</span>).
2. The previous design shared the signal from the stimulator across all 8 wells (i.e. the wells were stimulated in parallel). I wanted to allow for both voltage and current-clamping for each well, which necessitated that <span class="highlight">each well gets its own independent signal</span>.
3. All the wells needed to have a **gap** to allow for concurrent imaging and stimulation.
4. The electrodes needed to be **biocompatible**.
-->

<br>
I designed and built a system that addressed the above concerns by doing the following:

**[temporarily redacted]**

<!---
1. I used **demultiplexing** (demux) and **solid-state switching** (specifically, triacs) in order to route the single signal from the function generator to each well. The selected circuits allowed for route *switching at fast time scales* (on the order of microseconds).
2. As stated in 1, I use the demux-triac-switching architecture to route the single signal to each well independently. This allows for <span class="highlight">voltage and current control for each well</span>.
3. I designed a PCB with a *cutout that allows for a microscope/camera to peer into the wells*.
4. I used steel bars to shape electrodes then coated them with **platinum** or **gold** in order to be biocompatible with the tissue samples.
-->

![image of pcb]({{ site.baseurl }}/images/portfolio/2022-07_novartis_hts_system/pcb.avif)
<div align="center"><em>PCB with gold-coated electrodes.</em></div>

## Results:

### Benchmark Improvements:
* Standard System: 8-channels; My System: 96-channels; **12x improvement**
* Standard System: ~$2000; My System: ~$200; **10x cost reduction**

### Research Impacts:
> The continual improvement of the mini-heart platform has helped Hara’s group drive their research project forward, allowing them to find a number of potentially interesting molecules, which are now being optimized into potential lead candidates.

### Organizational Impacts:
> The success of the platform has also attracted the attention of other cardiovascular research groups in the company. It has since been expanded to more projects, particularly profiling different genetic targets in other cardiovascular diseases such as hypertension or arrhythmias.

> The success of the platform has also attracted the attention of other cardiovascular research groups in the company. It has since been expanded to more projects, particularly profiling different genetic targets in other cardiovascular diseases such as hypertension or arrhythmias. 


