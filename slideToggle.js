export default {
    data() {
        return {
            // Settings
            s: []
        }
    },
    updated() {
        // Filter refs and assign css + settings
        const keys = Object.keys(this.$refs).filter(k => ~k.indexOf('slide'))
        for (let i in keys) {
            const k = keys[i]
            const el = this.$refs[keys[i]]
            
            // Set css
            el.style.overflow = 'hidden'
            el.style.height = el.offsetHeight + 'px'
            
            // Set base settings
            if (!this.s[k]) {
                this.s[k] = {
                    open: true,
                    initHeight: el.offsetHeight
                }
                if (el.offsetHeight === 0 || el.style.display === 'none') {
                    el.style.display = 'block'
                    el.style.height = 'auto'
                    this.s[k].initHeight = el.offsetHeight
                    this.s[k].open = false
                    el.style.height = '0px'
                }
            }
        }
    },
    methods: {
        slideToggle(k, s) {
            const el = this.$refs[k]
            const sk = this.s[k]
            
            el.style.transition = 'height ' + s + 'ms ease-in-out'
            
            // Close / Open 
            if (sk.open) {
                sk.open = false
                el.style.height = '0px'
            } else {
                sk.open = true
                el.style.height = sk.initHeight + 'px'
            }
        }
    }
}
