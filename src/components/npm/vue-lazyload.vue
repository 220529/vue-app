<template>
    <div class="image-gallery">
        <h1>图片懒加载示例</h1>
        <div v-for="(image, index) in images" :key="index" class="image-item">
            <img v-lazy="image" alt="Lazy loaded image" />
        </div>
    </div>
</template>

<script>
export default {
    name: "LazyLoadGallery",
    data() {
        return {
            images: [
                "https://picsum.photos/id/237/500/300",
                "https://picsum.photos/id/238/500/300",
                "https://picsum.photos/id/239/500/300",
                "https://picsum.photos/id/240/500/300",
                "https://picsum.photos/id/241/500/300",
                "https://picsum.photos/id/242/500/300",
                "https://picsum.photos/id/243/500/300",
                "https://picsum.photos/id/244/500/300",
                "https://picsum.photos/id/245/500/300",
                "https://picsum.photos/id/246/500/300",
                "https://picsum.photos/id/247/500/300",
            ],
        };
    },
};
</script>

<style>
.image-gallery {
    text-align: center;
}

.image-item {
    margin-bottom: 20px;
}
</style>