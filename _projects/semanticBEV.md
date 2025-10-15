---
layout: page
title: Semantic BEV
description: Perception & Learning for Robotics
img: assets/img/semanticBEV/tartanground_examples.png
importance: 90
category: academic
# related_publications: einstein1956investigations, einstein1950meaning
---

##### February 2025 - June 2025
###### [Report](/assets/pdf/shortcircuit_finalreport.pdf)


For my first project class at ETH, Perception and Learning for Robotics, my partner and I worked on developing a model for semantic and elevation Birds-Eye-View (BEV) mapping. The model was meant to serve as a benchmark for the recently created dataset [TartanGround](https://tartanair.org/tartanground/index.html).

For mobile robots, having an understanding of the surrounding area is crucial for path-planning and decision making. For many applications, such as longer-term path planning or obstacle avoidance, a 2D BEV map is sufficient. We also construct 2.5D maps, which include a measurement for elevation. These can be useful for navigation.

For this project, we started with a previous work called [PointBeV](https://arxiv.org/abs/2312.00703), which was at the time a recently published work that trained models for BEV obstacle detection for autonomous vehicles. The main contribution of this work was an sparse feature-pulling approach to mapping the obstacles from the camera to the BEV representation. We chose this work as a starting point because it was recent, had state-of-the-art results, and a solid code base to pull from.

From here, we worked on constructing our training data fromn the TartanGround dataset. We need to create BEV maps, group classes represented in the simulation into semantic classes useful for navigation, and put these into formats that will work well for training a deep learning model. I learned a lot about working with the Euler Cluster at ETH and managing large amounts of data (we were working with an approximately 1TB subset of the entire dataset).

Once we had our training data, we worked on training a model on this data. We heavily modified the existing codebase we were working on to process more images at different camera-view angles, and to produce BEV maps with 6 or so different semantic classes, or 2.5D elevation maps as outputs. This was also a huge learning experience in PyTorch, more advanced deep learning libraries for research like PyTorch lightning, and training models.

In the end we had reasonable success with the models, creating nice demonstration videos for different types of environments, from natural to industrial to urban. However, there were also issues with the model that stemmed from the data that was available to us. For instance, in some of the simulation environments that we worked with, trees and low-lying grass were both labeled as "plant", despite the fact that they have very different meanings for navigability. So for many of these environments, the model had a challenging time telling the navigable terrain from the non-navigable terrain.

If you would like to check out the implementations details, please feel free to read the report linked above!






<div class="row mt-3">
<div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/semanticBEV/pointbevDemo.gif" class="img-fluid rounded z-depth-1" caption="Results from the model we trained on natural environments"%}
    </div>
</div>

