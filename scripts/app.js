/// Create a new Vue app
const app = Vue.createApp({
    /// Define the data for the app
    data() {
        return {
            studentFullName : "Vamseedhar Reddy Balapanuri",
            waterLevelValue : 65,
            waterLevels: [
                        { id: 'danger-low', color: 'danger', label: 'Danger - Low Water Levels!',
                        min: 0, max: 10 },
                        { id: 'warn-low', color: 'warning', label: 'Warning - Low Water Levels',
                        min: 11, max: 30 },
                        { id: 'safe', color: 'safe', label: 'Safe Water Levels', min: 31, max: 70
                        },
                        { id: 'warn-high', color: 'warning', label: 'Warning - High Water Levels', min: 71, max: 90 },
                        { id: 'danger-high', color: 'danger', label: 'Danger - High Water Levels!', min: 91, max: 100 }
                        ]

        };
    },
    /// Define the methods for the app
    methods: {
        activeStatusLevel(waterLevel) {
            /// Logic here for if the water level is within the level parameters return boolean
            if(this.waterLevelValue >= waterLevel.min && this.waterLevelValue <= waterLevel.max)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
});

/// Mount the Vue app to the div with id "app"
app.mount('#app');
