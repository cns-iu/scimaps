---
en:
  iteration: 21
  sequence: 24
  year: 2025
  title: Mind
  body: >-
    L﻿ink to Submitted Work: https://moebio.com/mind/


    Look into the machine's mind


    Understanding the inner works of a Large Language Model (LLM) such as ChatGPT could be extremely challenging. One can learn a lot about it just by running experiments. An LLM is, in essence, a function that associates to any text a probabilities distribution for the next word. By repeating the same prompt thousands of times it’s possible to obtain a statistical picture of the probabilities associated to each possible next word. Visualizing this data is analogous to performing neuroimaging, like an MRI, to a machine.


    Using the ChatGPT api, I ran the same completion prompt "Intelligence is " thousands of times. Given a text, a Large Language Model assigns a probability for the word (actually a token) to come, and it just repeats this process until a completion is…well, complete.


    • Semantic Space Visualization (on the left)

    Each text has an embedding: a position in a 1536-dimensions space. For each response there's a trajectory through this space that corresponds to each sub-sequence of words, example: "Intelligence is " → "Intelligence is the" → "Intelligence is the ability" → "Intelligence is the ability to" → … → full completion.


    Because I cannot visualize a 1536-dimensions space, I use a popular technique called Principal Components Analysis, which compresses a highly dimensional space into few dimensions, while preserving as much information as it can. I visualize all the completion trajectories in this space.


    What you see in the cube is a tree of trajectories that bifurcate. All start with "Intelligence is " and progress towards longer and less probable sub-sequences of responses. It's the same tree being visualized on the right.


    • The Tree Visualization (on the right)

    It visualizes all collected completions. It also represents the calculated probability of a word following a text, so "Intelligence is the " will be followed by "ability" ~75% of the times.
  externalLink: https://moebio.com/mind/
  makers:
    - santiago-ortiz/readme
  image:
    sm: mindsm.png
    med: mindsm.png
    lg: mindsm.png
es:
  makers:
    - santiago-ortiz/readme
zh: {}
fr: {}
pt: {}
de: {}
pl: {}
---
