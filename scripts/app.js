var input = 50

var colorOne = {
  rgb: [255,255,255],
  rgbString: "rgb(255,255,255)"
}

var colorTwo = {
  rgb: [255,255,255],
  rgbString: "rgb(255,255,255)"
}

var newColor = {
  rgb: [255,255,255],
  rgbString: "rgb(255,255,255)"
}

function update(data) {
  if (data.id == "colorOne") {
    colorOne.rgbString = data.jscolor.toRGBString();
    colorOne.rgb = data.jscolor.rgb
  } else if (data.id == "colorTwo") {
    colorTwo.rgbString = data.jscolor.toRGBString();
    colorTwo.rgb = data.jscolor.rgb
  }
  input = document.getElementById("scale").value
  newColor.rgb = findColor(colorOne.rgb, colorTwo.rgb, input)
  newColor.rgbString = "rgb(" + newColor.rgb + ")"
  document.getElementById('rect').style.background = "linear-gradient(to right, " + colorOne.rgbString + ", " + colorTwo.rgbString + ")";
  document.getElementById('rect2').style.background = newColor.rgbString;
}


const findColor = (rgbArrayOne, rgbArrayTwo, input) => {
  var scaleHigh = 100;
  var newColorArray = []
  for (var i = 0; i < rgbArrayOne.length; i++) {
    var newValue = 0
    if (rgbArrayOne[i] == rgbArrayTwo[i]) {
      newValue = rgbArrayOne[i]
    } else {
      var differnce = Math.abs(rgbArrayOne[i] - rgbArrayTwo[i]);
      if (rgbArrayOne[i] > rgbArrayTwo[i]) {
        newValue = Math.round(rgbArrayOne[i] - (differnce*input/scaleHigh));
      } else {
        newValue = Math.round(rgbArrayOne[i] + (differnce*input/scaleHigh));
      }
    }
    newColorArray.push(newValue)
  }

  newColor.rgbString = newColorArray.join(",")
  return newColor.rgbString
}
