---
layout: page
title: Sugar Beet Segmentation
description: Deep Learning & Neural Networks Capstone
img: assets/img/DLNN_capstone/phenobench_example.png
importance: 110
category: academic
# related_publications: einstein1956investigations, einstein1950meaning
---

##### February 2024 - May 2024
###### [Github Repo](https://github.com/MilesMena/phenobench) | [Report](https://github.com/MilesMena/phenobench/blob/main/final_report.pdf) | [Poster](https://github.com/MilesMena/phenobench/blob/main/final_poster.pdf)



In my final semester at CU Boulder, I took Deep Learning and Neural Networks (CSCI 5922), a graduate-level class covering state-of-the-art deep learning techniques and research. As part of this class, we were required to propose and develop an original deep learning research project on a topic that interested us.

Because of our shared interest in agricultural robotics, my partner and I chose to enter the [PhenoBench Competition](https://www.phenobench.org/benchmarks.html), a competition aiming at improving semantic segmentation (and other tasks) on sugar beet fields. We aimed to improve on the existing submissions by training two different models.

<div class="row mt-3">
<div class="col-sm-6 mt-3 mt-md-0 mx-auto">
        {% include figure.html path="assets/img/DLNN_capstone/phenobench_example.png" class="img-fluid rounded z-depth-1" caption="An example frame from the PhenoBench competition. Our aim was to classify each pixel as soil, crop, or weed."%}
    </div>
</div>

We based our models on a vanilla UNET architecture, and used this architecture as a control to determine whether our modifications made improvements.

Our first model took a feature engineering approach, by adding two additional channels to the original RGB image before feeding it into the UNET. The first channel was a CIVE (color index of vegetation extraction) image, a common way of detecting vegetation in remote sensing applications. The second channel was the bounding boxes output from YOLO, a popular object detection network. The idea behind this network was that it could focus the network's efforts early on regions deemed likely to be vegetation.

<div class="row mt-3">
<div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/DLNN_capstone/civeYoloImg.png" class="img-fluid rounded z-depth-1" caption="The RGB Image, CIVE Channel, and YOLO Channel fed into the UNET in our first model." %}
    </div>
</div>


Our second model integrated Convolutional Block Attention Modules (CBAM) into the UNET architecture, which is a module that leverages channel and spatial attention to inform the model of the importance of the output channels. These modules were integrated into the model after max-pooling steps and before up-convolution steps.

We found that the feature engineering approach led to a small improvement in weed detection, but that the CBAM approach led to a significant improvement in weed detection, and overall mIOU. We submitted the results to the PhenoBench competition. For more details, please see the report linked above.


<div class="row mt-3">
<div class="col-sm-8 mt-3 mt-md-0 mx-auto">
        {% include figure.html path="assets/img/DLNN_capstone/activationmaps.png" class="img-fluid rounded z-depth-1" caption="Activation maps for each model for soil, crops, and weeds, respectively."%}
    </div>
</div>

This project was a nice introduction to deep learning, and I learned a lot about conducting a research project and how to work on an intensive software project with a partner. It also served to deepen my interest in agricultural robotics!