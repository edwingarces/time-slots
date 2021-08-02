export type TimeSlot = {
  time: string
  motorcyclists: Array<Motorcyclist>
  users: Array<number>
}

export type Motorcyclist = {
  id: number
  available: boolean
  name: string
}

export type User = {
  id: number
  name: string
}

export type Notification = {
  message: string
  type: 'success' | 'danger' | 'warning' | 'out'
}
