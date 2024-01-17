interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width: 123,
        height: 456
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '234',
    size: {
        width: 234,
        height: 345,
    }
}
rect2.color = 'black'
// rect2.id = 23

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ===============

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '234',
    size: {
        width: 234,
        height: 345,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ===============

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ===============

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}
