---
title: "MitoGAN"
year: 2023
excerpt: <b>Jan 2023 - May 2023</b><br>I built an image processing pipeline and trained a GAN to generate synthetic data. This data is used to train subsequent models that simulate mitochondrial dynamics.
collection: portfolio
image: '../images/portfolio/2023-05_mitogan/mitogan_realorfake.png'
---

<hr>

**Project Timeline**: Jan 2023 - May 2023 (~5 months)

**Skills Used**: PyTorch, OpenCV, Generative Adversarial Networks (GANs), Image Processing, Edge Detection (Laplace Filtering), Denoising (Non-local Means), Thresholding (Otsu's)

**Mentors**: [Gav Sturm](https://www.linkedin.com/in/gabriel-gav-sturm-551666147/), [Wallace Marshall](https://cellgeometry.ucsf.edu/)

<hr>

![image of two potential mitochondria images]({{ site.baseurl }}/images/portfolio/2023-05_mitogan/mitogan_realorfake.png)
<div align="center"><em>Which image of mitochondria is real?</em></div>

## Context:

> "Mitochondria are not just bean-shaped!" 
> 
> — Gav Sturm

Mitochondria are organelles with remarkably complex biophysical structures that have poorly understood mechanical behaviors. These subcellular structures have dynamic morphologies that adapt to the many intricate biological processes within the cell. They stretch, elongate, shrink, bend, and even "bead" almost as if they were cells themselves! I joined Gav Sturm for a rotation project in order to help better understand the remarkable dynamics of mitochondria.

Gav ultimately wanted to capture a biophysical model of mitochondrial dynamics *in silico*. We approached the problem using a data-driven approach. In the early stages of the work, Gav researched, developed, and simulated physics-based parametrized models. I joined during the next stages of the work where Gav was considering methods for <span class="highlight">learning the distribution of features</span> most relevant for recapitulating dynamics. Exploring **generative machine learning** methods seemed the most applicable next steps for learning feature space distributions.

## Problem:

We were dealing with largely unstructured data in the form of fluorescence microscopy videos. Additionally, our dataset was rather limited at the time as there were only about 20 videos that added to only about 600 images to use. Lastly, the images required some processing in order to standardize the outputs across the samples (in case there was any drift/shift in distribution over time). Summarily, our problem statement boiled down to:

1. Data in the form of fluorescence microscopy **videos** of labeled mitochondria.
2. **Small sample regime**.
3. **Distribution shift** across samples.

## Solution:

Firstly, sequence modeling was ruled out because

1. there were <span class="highlight">not enough videos</span> (only ~20) to be used as samples and
2. using each frame (image) from the videos as its own samples simplified the problem statement.

Secondly, we wanted to use a **generative model** in order to

1. learn the feature distributions from the samples and
2. use the **synthetic data** generated from the models for training more models.

![image of GAN architecture]({{ site.baseurl }}/images/portfolio/2023-05_mitogan/gan_architecture.png)
<div align="center"><em>GAN architecture.</em></div>

<br style="margin-top: -30px;">

We opted to use **Generative Adversarial Networks (GANs)** since the **generator** model is capable of *learning a distribution* of the input features and can be used to *generate synthetic data*. Additionally, we can interpret the **discriminator** model to see what features it found most predictive for classifying between real and fake images. In other words, the <span class="highlight">GAN architecture offers the benefits of a generative model while also allowing for interpretation of geometrical features most important to mitochondria</span>.

## Results:



![image of revealed mitochondria image identities]({{ site.baseurl }}/images/portfolio/2023-05_mitogan/mitogan_realrevealed.png)
<div align="center"><em>Did you guess correctly?</em></div>

