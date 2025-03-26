document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video_main");
    const observer = new IntersectionObserver(([entry], obs) => {
        if (entry.isIntersecting) {
            const source = document.createElement("source");
            source.src = "./video/video_main.mp4";
            source.type = "video/mp4";
            video.appendChild(source);
            obs.disconnect();
        }
    });
    observer.observe(video);
});