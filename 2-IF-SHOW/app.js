const app = Vue.createApp({
  template: `
    <div v-if="bGoster">
        bilgiler
    </div>
    <div v-show="true">
        bilgiler
    </div>
    <button @click="toggle">
        <span v-if="bGoster">Gizle</span>
        <span v-else>Göster</span>
    </button>
    `,
  data() {
    return {
        bGoster: true,
    };
  },
  methods: {
    toggle() {
        this.bGoster = !this.bGoster;
    },
  },
});

app.mount(".uygulama");
