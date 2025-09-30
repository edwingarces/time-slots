export type TimeSlotStatus = 'available' | 'assigned' | 'full'

export type TimeSlot = {
  time: string
  motorcyclists: Array<Motorcyclist>
  users: Array<number>
}

export type Motorcyclist = {
  id: number
  available: boolean
  name: string
  avatarUrl?: string
}

export type User = {
  id: number
  name: string
  role?: string
}

export type NotificationType = 'success' | 'danger' | 'warning' | 'info' | 'out'

export type Notification = {
  message: string
  type: NotificationType
}

export type HistoryEntry = {
  id: string
  timestamp: string
  message: string
  slotTime: string
  userId: number
  action: 'assign' | 'unassign'
}
