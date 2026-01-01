export default {
  name: 'LifeView',
  data() {
    return {
      showSafety: false,
      showHospital: false
    }
  },
  methods: {
    showSafetyModal() {
      this.showSafety = true;
      document.body.style.overflow = 'hidden';
    },
    closeSafetyModal() {
      this.showSafety = false;
      document.body.style.overflow = 'auto';
    },
    showHospitalModal() {
      this.showHospital = true;
      document.body.style.overflow = 'hidden';
    },
    closeHospitalModal() {
      this.showHospital = false;
      document.body.style.overflow = 'auto';
    }
  }
}