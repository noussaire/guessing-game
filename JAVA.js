<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Preview</title>
    <style>
        #image {
            width: 300px;
            height: 200px;
            border: 1px solid #000;
            margin: 20px auto;
            text-align: center;
            line-height: 200px;
            font-size: 16px;
            background-size: cover;
            background-position: center;
        }
        .previewPic {
            width: 100px;
            height: 100px;
            margin: 10px;
            cursor: pointer;
        }
        .container {
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="image">Hover over an image below to display here</div>

    <div class="container">
        <img src="https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+1" 
             alt="Image 1" class="previewPic" 
             onmouseover="upDate(this)" 
             onmouseout="unDo()">
        <img src="https://via.placeholder.com/300/00FF00/FFFFFF?text=Image+2" 
             alt="Image 2" class="previewPic" 
             onmouseover="upDate(this)" 
             onmouseout="unDo()">
        <img src="https://via.placeholder.com/300/0000FF/FFFFFF?text=Image+3" 
             alt="Image 3" class="previewPic" 
             onmouseover="upDate(this)" 
             onmouseout="unDo()">
    </div>

    <script>
        function upDate(previewPic) {
            const imageDiv = document.getElementById("image");
            imageDiv.style.backgroundImage = `url(${previewPic.src})`;
            imageDiv.innerText = previewPic.alt;
        }

        function unDo() {
            const imageDiv = document.getElementById("image");
            imageDiv.style.backgroundImage = "url('')";
            imageDiv.innerText = "Hover over an image below to display here";
        }
    </script>
</body>
</html>
