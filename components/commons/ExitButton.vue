<template>
    <div class="exit-btn">
        <img class="exit-btn__img" src="https://www.bsk-32.ru/img/icons/white-cross.svg"></img>
    </div>
</template>

<style lang="scss" scoped>
.exit-btn {
    height: 80rem;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    background-color: #ca2250;
    mask-size: 100% 100%;
    transition: 0.2s ease-in;
    justify-content: center;
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABQCAYAAADRAH3kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKiSURBVHgB7d3PbdRAFMfx33iJxDElTNIAyyniFOjA6SBUEKgg0AFUQDrAHSQXFNjLQgemAnIP6+GNyUpWpEj5s89+s+/3OVm5RfpqZjyz8oRFPDrEBlSzFFNC7BLmIWAuf4og8wKUfIv1fKfCIRKO8T8IMkgtgKGbGE7k8RhkyigBrF3GOs4CvnJEsGPUANa+79fvKuBUHndBk5okgKwfDSqcg4vFSVWYyKu2aVcd3sgi8SdoMpONAGvLWO9eBxkJuC6YxOQBZH0EFZbgdDC6yaaAoZdtc9VPB8AVaFQmAsjymiB1eAsalZkAsoO2aWQ7uQGNxlQAmZwlvAengtGYCyBPBbIy/QQahbkAsmcdPoOjwChMBpDfCuRI+QKkzmQA2d9VPwqQMhMbQXdZ7Nd/wAMjVWZHgIzTgD7TAciewAVIlekAqoDfIFWmA7he8ahYm+kAnnMvQJ3pt4BM3gQSSI3pEYD0MQDnGIBzDMA5BuAcA3COATjHAJxjAM4xAOcYgHMMwDkG4BwDcI4BOMcAnGMAzjEA5xiAcwzAOQbgHANwjgE4xwCcYwDOMQDnGIBzDMA5BuAcA3COATjHAJxjAM6VEAA/E6OIAThnPoAQ+KUwTfZHgIQWpMZ8AAn4BVJjPoCdjlfIaDIfQL47APxmsJoi9gH41XA9RQTAK2T0FBFAf4UML5JSUcxWMEcBHcUEwFFAh/mvhd+22KuXvGl8c4o7DVwlHIFTwcYUF0C+WXTV9dfL0gYU+XsAieAsdfgAerLi1gBDP2J9GiqG8BRFB5BJBLVE8AW8YPJRig8gu4x1nFU4l8cIepCtCGCNU8LDbdWPQg/a5qO8IezJ4xnoXrZqBBi6mRZey1HyCTeO7ra1AQytY5B/9kVKEkPo1woRhH+eyoqADy9wTgAAAABJRU5ErkJggg==);
    width: 128rem;

    &:hover {
        opacity: 0.6;
    }

    &__img {
        width: 32rem;
        height: 32rem;
        padding: 24rem 70rem;
    }
}
</style>
