---
layout: page
title: Short Circuit
description: Advanced Robotics Capstone Project
img: assets/img/shortcircuit/racer.jpeg
importance: 120
category: academic
# related_publications: einstein1956investigations, einstein1950meaning
---

##### February 2023 - May 2023
###### [Report](/assets/pdf/shortcircuit_finalreport.pdf)

Advanced Robotics was the class I was looking forward to most in my time as an undergraduate at CU Boulder, and it did not disappoint. In addition to extremely interesting and varied lectures, we got to work concurrently on an autonomous racing project with the lab's hardware. 

The main task for all teams was to build and program an autonomous vehicle that could navigate the race course in as little time as possible. There were also side-tasks that we could choose to tackle, and our team chose to stop when a stop-sign is detected, and estimate in real-time the coefficient of friction on the tires.

For control, we implemented a Stanley controller for lateral control, which uses both cross-track error and heading error to generate steering commands. For longitudinal control, we used a PID controller that adjusted speed based on upcoming turn curvature.

<div class="row mt-3">
<div class="col-sm-8 mt-3 mt-md-0 mx-auto">
        {% include figure.html path="assets/img/shortcircuit/racer.jpeg" class="img-fluid rounded z-depth-1" caption="Our finished hardware (our team was mostly software engineers 🙃)"%}
    </div>
</div>

For stop sign detection, we trained a YOLO object detection model on images collected from our car's camera. The detector ran in real-time and could reliably identify stop signs from various angles and lighting conditions. When a stop sign was detected, our car would decelerate smoothly to a complete stop before the sign.

The project culminated in a final race where all teams competed for the fastest lap time. Our focus on robust control algorithms and adaptive behavior paid off—while our hardware wasn't the prettiest, our software was solid and our car completed consistent, competitive laps.

<div class="row mt-3">
<div class="col-sm-8 mt-3 mt-md-0 mx-auto">
        {% include figure.html path="assets/img/shortcircuit/demo.gif" class="img-fluid rounded z-depth-1" caption="Our car rounds a corner and corrects trajectory. Pardon the shaky camera work—we were in a dead sprint to keep up"%}
    </div>
</div>

This project was an excellent introduction to autonomous mobile robotics, and gave me hands-on experience with the full pipeline from hardware to perception to control. It was fantastic to be a lead a multidisciplinary team and get to jump from task to task. It also showed me how challenging full-system integration can be on hardware with time contraints.