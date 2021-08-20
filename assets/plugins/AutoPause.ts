import MediaPlayer from "../js/MediaPlayer";

class AutoPause {
    private threshold: number;
    private player: MediaPlayer;

    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    public run(player){
        this.player = player;
        const observer = new IntersectionObserver(
            this.handlerIntersection, 
            { threshold: this.threshold }
        );
        observer.observe(player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    private handlerIntersection(entries: Array<IntersectionObserverEntry>): void {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio > this.threshold;
        isVisible ?  this.player.play() : this.player.pause();
    }

    private handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        isVisible ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;