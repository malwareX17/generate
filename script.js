console.log("Hello, World!");

document.getElementById('createFile').onclick = function() {
      const text = "This text file was generated from your web app!";
      const blob = new Blob([text], { type: "text/plain" });
      const anchor = document.createElement("a");
      
      anchor.download = "generated_file.txt";
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target = "_blank";
      anchor.style.display = "none";
      
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    };
