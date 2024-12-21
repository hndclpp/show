window.Plum = class Plum {
  constructor() {
    console.log('Plum constructor called')
    // 基础参数
    this.r180 = Math.PI
    this.r90 = Math.PI / 2
    this.r15 = Math.PI / 12
    this.color = this.getThemeColor()
    this.MIN_BRANCH = 10
    this.MAX_DEPTH = 500
    this.length = 10
    this.branchProb = 0.3
    this.interval = 1000 / 120

    this.init()
    this.bindThemeChange()
  }

  getThemeColor() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
    return isDark ? '#ffffff55' : '#88888855'
  }

  bindThemeChange() {
    new MutationObserver(() => {
      if (this.ctx) {
        this.color = this.getThemeColor()
        this.ctx.strokeStyle = this.color
      }
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })
  }

  init() {
    const canvas = document.createElement('canvas')
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      z-index: 99;
      opacity: 0.5;
    `
    
    document.body.appendChild(canvas)
    console.log('Canvas appended to body')
    this.canvas = canvas
    this.initCanvas()
    this.start()

    window.addEventListener('resize', () => {
      this.initCanvas()
      this.start()
    })
  }

  initCanvas() {
    const width = window.innerWidth
    const height = window.innerHeight
    const ctx = this.canvas.getContext('2d')
    const dpi = window.devicePixelRatio || 1
    
    this.canvas.style.width = `${width}px`
    this.canvas.style.height = `${height}px`
    this.canvas.width = width * dpi
    this.canvas.height = height * dpi
    ctx.scale(dpi, dpi)
    
    this.ctx = ctx
    this.width = width
    this.height = height
  }

  branch(x0, y0, angle, depth = { value: 0 }) {
    const len = Math.random() * this.length
    depth.value += 1
    
    if (depth.value >= this.MAX_DEPTH) return

    const [x1, y1] = [
      x0 + len * Math.cos(angle),
      y0 + len * Math.sin(angle)
    ]

    this.ctx.beginPath()
    this.ctx.moveTo(x0, y0)
    this.ctx.lineTo(x1, y1)
    this.ctx.stroke()

    const ang1 = angle + Math.random() * this.r15
    const ang2 = angle - Math.random() * this.r15

    if (x1 < -100 || x1 > this.width + 100 || y1 < -100 || y1 > this.height + 100)
      return

    const chance = depth.value <= this.MIN_BRANCH ? 0.8 : 0.5
    if (Math.random() < chance)
      this.pending.push(() => this.branch(x1, y1, ang1, depth))
    if (Math.random() < chance)
      this.pending.push(() => this.branch(x1, y1, ang2, depth))
  }

  frame() {
    if (this.count++ < this.interval) return

    this.count = 0
    this.previous = this.pending
    this.pending = []

    if (!this.previous.length) {
      cancelAnimationFrame(this.frameId)
      return
    }

    this.previous.forEach((fn) => {
      if (Math.random() < this.branchProb)
        this.pending.push(fn)
      else
        fn()
    })
  }

  start() {
    if (!this.ctx) return
    
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.lineWidth = 2
    this.ctx.strokeStyle = this.color
    this.previous = []
    this.pending = []
    this.count = 0

    const randomMiddle = () => Math.random() * 0.6 + 0.2

    // 从四周开始生长
    this.pending = [
      // 上边
      () => this.branch(randomMiddle() * this.width, -5, this.r90),
      // 下边
      () => this.branch(randomMiddle() * this.width, this.height + 5, -this.r90),
      // 左边
      () => this.branch(-5, randomMiddle() * this.height, 0),
      // 右边
      () => this.branch(this.width + 5, randomMiddle() * this.height, this.r180)
    ]

    // 立即执行初始分支
    this.pending.forEach(fn => fn())

    const animate = () => {
      this.frame()
      this.frameId = requestAnimationFrame(animate)
    }
    animate()
  }

  destroy() {
    console.log('Destroying plum effect')
    if (this.frameId) {
      cancelAnimationFrame(this.frameId)
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas)
    }
  }
}
