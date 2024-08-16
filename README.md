# Herbal Plant Identification Model

## Overview

This project implements a herbal plant identification model using MobileNet architecture and transfer learning. The model is deployed as a web application, allowing users to upload images of plants for identification.

## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Model Details](#model-details)
6. [Web Application](#web-application)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Features

- Identify various herbal plants from uploaded images
- Real-time classification using a pre-trained model
- User-friendly web interface
- Responsive design for both desktop and mobile use

## Technology Stack

- **Model**: 
  - MobileNet architecture
  - Transfer Learning using TensorFlow/Keras
- **Web Frontend**: 
  - HTML5
  - CSS3
  - JavaScript (ES6+)
- **Model Deployment**: 
  - TensorFlow.js

## Installation

1. Clone the repository:
git clone https://github.com/MehtaAbhii/SIH.git

## Usage

1. Open the web application in your browser.
2. Click on the "Upload Image" button or drag and drop an image of a herbal plant.
3. Wait for the model to process the image.
4. View the identification results, including the predicted plant name and confidence score.

## Model Details

- **Base Model**: MobileNet V2
- **Training Dataset**: ["Custom dataset of 10000 images covering 50 herbal plant species"]
- **Transfer Learning**: Fine-tuned last few layers for herbal plant classification
- **Accuracy**: ["97% validation accuracy"]
- **Input Size**: 224x224 pixels

## Web Application

The web interface is built using  JavaScript, HTML, and CSS. Key files:

### Key Functions

- `loadModel()`: Loads the TensorFlow.js model
- `preprocessImage()`: Prepares uploaded images for model input
- `classifyImage()`: Runs inference on the preprocessed image
- `displayResults()`: Shows classification results to the user

## Contributing

We welcome contributions to improve the model accuracy or enhance the web interface. Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

