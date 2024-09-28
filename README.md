<h1 align="center">
  <br>
  <img src="https://github.com/brrkrmn/cliphoard/blob/main/public/icons/cliphoard.png" alt="ClipHoard logo" width="80">
  <br>
  ClipHoard
  <br>
</h1>

ClipHoard is a productivity tool to quickly save and access your most used data. You can save text, password, URLs, and code blocks and copy them with just a click. To use install the extension, follow this [link](https://chromewebstore.google.com/detail/cliphoard/amgfihockidjlcbhljidpcefieldgljf?hl=en-US&utm_source=ext_sidebar).

<br>

## Development Setup

To clone and run this project, you'll need Git and Node.js (which comes with npm) installed on your computer.

<br>

### Setting up the project

1. **Clone frontend repo**
```bash
git clone https://github.com/brrkrmn/cliphoard.git
```
2. **Go into the repo**
```bash
cd cliphoard
```
3. **Install dependencies**
```bash
npm install
```
4. **Run the app**
```bash
npm run watch
```

<br>

### View the Extension on Dev Mode
1. **Visit [Chrome Extensions Page](chrome://extensions/)**
2. **Click "Load unpacked"**
3. **Select the ClipHoard folder from your computer**
4. **Pin the extension**

⚠️ Remember to refresh the extension after making changes to `manifest.json`. 

For more information see [docs](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#reload)

<br>

### View the Extension on Production Mode
1. Build the project
```bash
npm run build
```
3. **Visit [Chrome Extensions Page](chrome://extensions/)**
4. **Click "Load unpacked"**
5. **Select the `dist` folder from your computer**

<br>

## License

Licensed under the MIT License.
