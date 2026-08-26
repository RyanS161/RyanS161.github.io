---
title: "LightDSO: Senior Thesis"
type: "thesis"
description: "Integrated a point-light-source illumination model into a direct visual SLAM algorithm (DSO) to reduce tracking error for robots navigating dark environments with onboard lighting, achieving substantial improvement over the baseline."
year: 2024
featured: true
image: "/images/projects/lightDSO-frames.png"
links:
  - label: "GitHub"
    url: "https://github.com/RyanS161/lightDSO"
  - label: "Report"
    url: "https://github.com/RyanS161/lightDSO/blob/master/docs/seniorThesis_Slocum.pdf"
---

For my senior thesis at CU Boulder, I took on an interesting robotic perception project left behind from a graduated PhD student. The task was to integrate a lighting model into an existing direct SLAM codebase, so that robots navigating with on-board lighting in dark environments could navigate visually.

![Example frames from the OIVIO dataset used to evaluate low-light SLAM](/images/projects/lightDSO-oivio.png)

*This work aimed to improve monocular SLAM for low-light environments. Pictured are example frames from the [OIVIO](https://arpg.github.io/oivio/) dataset.*

In robotics, SLAM stands for Simultaneous Localization and Mapping, meaning that a robot has to both construct a representation of its environment and place itself in that representation, given its sensor data. Direct vision-based SLAM means that instead of tracking keypoints (salient features like corners and edges) between frames, the algorithm directly utilizes the illumination intensity of each pixel to estimate the movement between frames.

Because of this direct measurement, there is a strong lighting-constancy assumption in direct algorithms. Robots with onboard illumination violate this assumption by changing the lighting conditions of the scene as they move around. Given this information, the aim behind this project was to integrate a simple lighting model to utilize knowledge about the onboard illumination in decreasing tracking error.

![The point-light-source lighting model integrated into DSO](/images/projects/lightDSO-model.png)

*The simple lighting model used in the project, assuming a point light source.*

By integrating a uniform lighting model into the algorithm, we were able to reduce tracking error substantially. However, these improvements were dubious due to the poor performance of the original algorithm. If you'd like to read more about the technical details, see the report linked above.

This was my first research project in robotics, and although there is a lot I would change if I were to do it again, I also learned a lot. I learned how to conduct a thorough literature review, I learned how to present ideas in a research context, and I learned how important it is to be able to communicate clearly where and how you could use assistance.
