---
en:
  sequence: 6
  body: >-
    **Link to submitted work: <https://distill.pub/2019/activation-atlas>**


    An Activation Atlas is an interpretability technique designed to create a global, visual map of the features and concepts learned by a deep computer vision model. Introduced in a 2019 Distill publication, it combines feature visualization with spatial aggregation to offer a comprehensive, bird’s-eye view of hidden network layers.


    While traditional interpretability methods focus on isolated neurons or examine how a network responds to individual input images, neurons in reality act in complex combinations. Activation atlases address this limitation by collecting millions of activation vectors from overlapping image patches across an extensive dataset, such as ImageNet, at specific layers of a network like InceptionV1.


    To construct an atlas, these collected activation vectors are grouped into a two-dimensional layout using dimensionality reduction techniques like t-SNE. Feature inversion is then applied to the averaged activations in each region of the map, producing synthetic visualizations that reveal what the network perceives in those areas. The resulting grid organizes abstract concepts—such as floral patterns, watery backgrounds, or animal features—into a navigable landscape, demonstrating how co-firing neurons collaborate to form rich visual representations.


    Beyond mapping visual features, activation atlases serve as vital diagnostic tools for neural network debugging. By illustrating the relationships between internal representations and final output predictions, they uncover hidden biases, unexpected failure modes, and classification vulnerabilities. For instance, an atlas can expose how the presence of a baseball texture might cause a model to misclassify a grey whale as a great white shark. Though constrained by the distribution of the underlying sample data, activation atlases provide a powerful framework for understanding and auditing deep learning models.
  externalLink: https://distill.pub/2019/activation-atlas
  makers:
    - shan-carter/readme
    - zan-armstrong/readme
    - ludwig-schubert/readme
    - ian-johnson/readme
    - chris-olah/readme
  title: Activation Atlases
  image:
    sm: activation-atlases-865.png
    med: activation-atlases-865.png
    lg: activation-atlases-865.png
  year: 2026
  iteration: 22
es: {}
zh: {}
fr: {}
pt: {}
de: {}
pl: {}
---
