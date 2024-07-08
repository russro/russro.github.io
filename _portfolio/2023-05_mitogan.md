---
title: "MitoGAN"
year: 2023
excerpt: <b>Jan 2023 - May 2023</b><br>I built an image processing pipeline and trained a GAN to generate synthetic data. This data is used to train subsequent models that simulate mitochondrial dynamics.
collection: portfolio
image: '../images/portfolio/2023-05_mitogan/mitogan_realorfake.png'
---

<hr>

**Project Timeline**: Feb 2023 - May 2023 (~4 months)

**Skills Used**: PyTorch, OpenCV, Generative Adversarial Networks (GANs), Image Processing, Edge Detection (Laplace Filtering), Denoising (Non-local Means), Thresholding (Otsu's)

**Mentors**: [Gav Sturm](https://www.linkedin.com/in/gabriel-gav-sturm-551666147/), [Wallace Marshall](https://cellgeometry.ucsf.edu/)

<hr>

![image of two potential mitochondria images]({{ site.baseurl }}/images/portfolio/2023-05_mitogan/mitogan_realorfake.png)
<div align="center"><em>Which image of mitochondria is real?</em></div>

## Context:

> "Mitochondria are not just beans 🤬!" 
> 
> — Gav Sturm

Mitochondria are organelles with remarkably complex biophysical structures that have poorly understood mechanical behaviors. These subcellular structures have dynamic morphologies that adapt to the many intricate biological processes within the cell. They stretch, elongate, shrink, bend, and even "bead" almost as if they were cells themselves! I joined Gav Sturm for a rotation project in order to help better understand the remarkable dynamics of mitochondria.

Gav ultimately wanted to capture a biophysical model of mitochondrial dynamics *in silico*. We approached the problem using a data-driven heuristic. In the early stages of the work, Gav researched, developed, and simulated physics-based parametrized models. Naturally, the next step was to identify the latent parameters underlying the dynamics of mitochondria. I joined during the next stages of the work. Gav and I brainstormed approaches for <span class="highlight">learning the distribution of features</span> most relevant for recapitulating dynamics, and we deduced that exploring **generative machine learning** methods seemed the most relevant for this application.

## Problem:

We were dealing with largely unstructured data in the form of fluorescence microscopy videos. Additionally, our dataset was rather limited at the time as there were only about 20 videos that added to only about 600 images to use. Lastly, the images required some processing in order to standardize the outputs across the samples (in case there was any drift/distribution shift over time). Processing the samples down may also allow for more sample efficient training which is important in small sample regimes. Summarily, our problem statement boiled down to:

1. Data in the form of fluorescence microscopy <span class="highlight">videos</span> of labeled mitochondria.
2. <span class="highlight">Small sample regime</span>.
3. Standardization of samples to account for feature <span class="highlight">distribution shift</span> and small sample regime.

## Solution:

Prior to choosing and training a model, the samples needed to be standardized. I built an image processing pipeline to account for drift across samples and reduce the dimensionality of the input features (reduced dimensionality allows for more sample efficient training). The pipeline is summarized in the following figure:

![image of preprocessing pipeline]({{ site.baseurl }}/images/portfolio/2023-05_mitogan/mitogan_preprocess.png)
<div align="center"><em>Preprocessing pipeline.</em></div>

<br style="margin-top: -30px;">

Firstly, sequence modeling was ruled out because

1. there were <span class="highlight">not enough videos</span> (only ~20) to be used as samples and
2. using each frame (image) from the videos as its own samples simplified the problem statement.

Secondly, we wanted to use a **generative model** in order to

1. learn the feature distributions from the samples and
2. use the **synthetic data** generated from the models for training more models.

![image of GAN architecture]({{ site.baseurl }}/images/portfolio/2023-05_mitogan/gan_architecture.png)
<div align="center"><em>GAN architecture.</em></div>

<br style="margin-top: -30px;">

We opted to use **Generative Adversarial Networks (GANs)** since the **generator** model is capable of *learning a distribution* of the input features and can be used to *generate synthetic data*. Additionally, we can interpret the **discriminator** model to see what features it found most predictive for classifying between real and fake images. In other words, <span class="highlight">the GAN architecture offers both the benefits of learning the features' distributions (*generative*) and interpreting which geometrical features are most important to classifying mitochondria (*discriminative*)</span>.

## Results:

To resummarize the objectives, we used GANs in order to

1. capture the distribution of input features within a model,
2. generate synthetic data for training subsequent models, and
3. interpret the most salient geometric features for identifying mitochondria.

During the rotation, I was able to complete a first pass at 1 and 2 but not 3. I processed and prepared training and testing data for training and evaluating the GAN. The results are as follows:

* Original dataset: ∼ 600 images; Generated: ∼ 30000; **50x generated**
* Tested different preprocessing combinations and GAN architectures to identify stable models with lowest collective losses:

![image of loss curves](loss_curves.png)
<div align="center"><em>Loss curves of different preprocessing and architecture combinations.</em></div>

<br style="margin-top: -30px;">

### Discussion

Notably, GANs are quite unstable. Additionally, there is a chance they may not converge if not initialized correctly (e.g. as shown in the Wasserstein GAN (WGAN) loss curve).

There are a couple of further analyses that I did not have the chance to conduct:

* The discriminator/classifier still needs to be analyzed for <span class="highlight">identifying salient geometric features</span>.
* Though many images were generated, the effective number of unique images is likely lower since <span class="highlight">generated images collapsed into several modes</span>. This is likely due to low diversity of cells imaged in the videos. More training data is needed. (When is it not need? Lol.)
* These days, there might be more powerful and interpretable approaches than using a GAN architecture, such as other **self-supervised learning** approaches.

![image of revealed mitochondria image identities]({{ site.baseurl }}/images/portfolio/2023-05_mitogan/mitogan_realrevealed.png)
<div align="center"><em>Did you guess correctly?</em></div>

