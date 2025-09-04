const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let tray;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: true, // visible au départ
    frame: false,
    resizable: true,
    skipTaskbar: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('close', (event) => {
    if (!app.isQuiting) {
      event.preventDefault();
      mainWindow.hide();
    }
  });

  mainWindow.webContents.on('did-finish-load', () => {
    // On cache la fenêtre seulement après le rendu pour garder la perf normale
    mainWindow.hide();

    setTimeout(() => {
      mainWindow.webContents.executeJavaScript(`
        (function waitAndClick() {
          const startBtn = document.getElementById('startBtn');
          if(startBtn) startBtn.click();
          else setTimeout(waitAndClick, 100);
        })();
      `);
    }, 5000);
  });
}

app.whenReady().then(() => {
  createWindow();

  tray = new Tray(path.join(__dirname, 'icon.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Ouvrir', click: () => mainWindow.show() },
    { label: 'Quitter', click: () => {
      app.isQuiting = true;
      app.quit();
    }}
  ]);
  tray.setToolTip('BPM Finder to MIDI');
  tray.setContextMenu(contextMenu);
});

// IPC pour fermer la fenêtre depuis le renderer
ipcMain.on('close-window', () => {
  if (mainWindow) mainWindow.hide();
});
