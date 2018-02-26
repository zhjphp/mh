<template>
  <div id="map"></div>
</template>

<script>
import Map from "ol/map";
import View from "ol/view";
import Extent from "ol/extent";
import ImageLayer from "ol/layer/image";
import Projection from "ol/proj/projection";
import Static from "ol/source/imagestatic";

export default {
  name: "olt",
  data() {
    return {
      msg: "Welcome!"
    };
  },
  mounted() {
    const extent = [0, 0, 3500, 2483];
    const projection = new Projection({
      code: "xkcd-image",
      units: "pixels",
      extent: extent
    });

    const map = new Map({
      layers: [
        new ImageLayer({
          source: new Static({
            attributions: '© <a href="http:/www.zyql.cn">www.zyql.cn</a>',
            url: "./img/fei_xian.jpg",
            projection: projection,
            imageExtent: extent
          })
        })
      ],
      target: "map",
      view: new View({
        projection: projection,
        center: Extent.getCenter(extent),
        zoom: 2,
        minZoom: 1,
        maxZoom: 8
      })
    });
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

html,
body,
#map,
#app {
  height: 100%;
  width: 100vw;
}
</style>


