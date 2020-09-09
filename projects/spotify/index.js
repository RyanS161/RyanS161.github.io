const history = [];

document.getElementById("fileInput").oninput = () => {
  let files = document.getElementById('fileInput').files;
  if (files.length <= 0) {
    return false;
  }
  for (let i = 0; i < files.length; i++) {
    let fr = new FileReader();
    fr.onload = (e) => {
      let result = JSON.parse(e.target.result);
      let formatted = JSON.stringify(result, null, 2);
      for (let i = 0; i < result.length; i++) { //<-- fix this
        history.push(result[i]);
      }
    }
    fr.readAsText(files.item(i));
  }
}

function artistsByTime() {
  const artists = {};
  for (let i = 0; i < history.length; i++) {
    if (!(history[i]['artistName'] in artists)) {
      artists[history[i]['artistName']] = 0;
    }
  }
  for (let key in artists) {
    for (let b = 0; b < history.length; b++) {
      if (history[b]['artistName'] == key) {
        artists[key] += history[b]['msPlayed'];
      }
    }
  }
  const arr = []
  for (let key in artists) {
    arr.push([key, artists[key]]);
  }
  return arr.sort((a,b)=> b[1] - a[1]);
}

function songsByTime() {
  const songs = {};
  for (let i = 0; i < history.length; i++) {
    if (!(history[i]['trackName'] in songs)) {
      songs[history[i]['trackName']] = 0;
    }
  }
  for (let key in songs) {
    for (let b = 0; b < history.length; b++) {
      if (history[b]['trackName'] == key) {
        songs[key] += history[b]['msPlayed'];
      }
    }
  }
  const arr = []
  for (let key in songs) {
    arr.push([key, songs[key]]);
  }
  return arr.sort((a,b)=> b[1] - a[1]);
}

function totalTime() {
  let total = 0;
  for (let i = 0; i < history.length; i++) {
    total += history[i]['msPlayed']
  }
  return total;
}

function printTime(ms) {
  let hours = ((ms/1000)/60)/60;
  let minutes = (hours % 1) * 60;
  let seconds = (minutes % 1) * 60;
  let hoursS = Math.floor(hours);
  let minutesS = Math.floor(minutes)
  let secondsS = Math.round(seconds*100)/100;
  let str = `You listened to <strong>${hoursS}</strong> hours, <strong>${minutesS}</strong> minutes, and <strong>${secondsS}</strong> seconds during this period.`;
  document.getElementById('output').innerHTML = str;
}

function printBT(dict) {
  let str = "<table id='resultTable'><tr><th>Rank</th><th>Name</th><th>Time listened</th></tr>";
  for (let a = 0; a < dict.length; a++) {
    str += "<tr><td>"+(a+1)+"</td><td>" + dict[a][0] + "</td><td>" + msToHMS(dict[a][1]) + "</td></tr>";
  }
  str += "</table>"
  document.getElementById('output').innerHTML = str;
}

function msToHMS(ms) {
  let hours = ((ms/1000)/60)/60;
  let minutes = (hours % 1) * 60;
  let seconds = (minutes % 1) * 60;
  let hoursS = Math.floor(hours);
  let minutesS = String(Math.floor(minutes)).padStart(2, '0');
  let secondsS = String(Math.round(seconds*100)/100).padStart(2, '0');
  let time = `${hoursS}:${minutesS}:${secondsS}`;
  return time;
}
