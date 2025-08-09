# 🎥 Video Recorder & Image Capture Web App

# Demo 
#[live Demo](https://pakupodisathish.github.io/loomProject/)

A simple **camera recorder and image capture tool** built with HTML, CSS, and JavaScript using the **MediaRecorder API** and Canvas.  
It allows you to:
- Record videos from your webcam.
- Capture snapshots with filter effects.
- Add colored overlay filters in real time.
- Track recording duration with a timer.

---

## 🚀 Features
- 📹 **Record Video** — Start/stop recording directly in the browser.
- 🎙️ **Optional Audio Support** — Can be enabled easily.
- 📷 **Capture Images** — Take snapshots from the live stream.
- 🎨 **Filter Effects** — Apply color filters in real time.
- ⏱ **Recording Timer** — Shows recording duration in HH:MM:SS format.
- 💾 **Download Media** — Videos are saved in `.mp4` (or `.webm`) format, images in `.jpg`.

---

## 📂 Project Structure
📁 project-folder
│── index.html # Main HTML page
│── styles.css # Styling for buttons, filters, and layout
│── index.js # JavaScript logic for recording and capturing


## ⚙️ How It Works
1. **Camera Access**  
   Uses `navigator.mediaDevices.getUserMedia()` to request webcam (and optionally microphone) access.

2. **Recording**  
   Uses the `MediaRecorder API` to start/stop recording. Chunks of recorded data are saved and merged into a downloadable video.

3. **Capturing**  
   Uses an HTML `<canvas>` to take a snapshot of the video frame, apply filters, and download as an image.

4. **Filters**  
   Clicking on a filter changes the overlay color and applies it to both the live feed and captured images.

---

## 📸 Usage
1. **Clone this repository**
git clone https://github.com/your-username/video-recorder-app.git

Open the project folder

cd video-recorder-app

Open index.html in a browser

Allow camera (and microphone, if enabled) permissions.

# 🔧 Customization
# Enable Audio,Video
const constraints = { video: true, audio: true }

# 📜 License
This project is open-source and available under the MIT License.

# 🙌 Acknowledgements
MDN Web Docs — MediaRecorder API
Canvas API

---
