class MediaPlayer {
    public media: HTMLMediaElement;
    public plugins = [];
    public container: HTMLElement;
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this._initPlugins();
    }

    private _initPlugins(): void {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    public initPlayer () {
        this.container = document.createElement('div');
        this.container.style.position = "relative";
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }
    
    public play(): void {
        this.media.play();
    };
    
    public pause(): void {
        this.media.pause();
    };
    
    public paused(): boolean {
        return this.media.paused;
    }
    
    public mute(): void {
        this.media.muted = true;
    }
    
    public toggleMute(): void {
        this.media.muted = !this.media.muted;
    }
    
    public unmute(): void {
        this.media.muted = false;
    }
    
    public togglePlay(): void {
        this.media.paused ? this.media.play() : this.media.pause();
    }
    
}

export default MediaPlayer;