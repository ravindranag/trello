import { micah } from "@dicebear/collection"
import { createAvatar } from "@dicebear/core"

export const randomAvatar = (seed = 'John Doe') => {
  const avatar = createAvatar(micah, {
    backgroundType: ['solid'],
    backgroundColor: ['#b3e69a'],
    seed
  })
  return avatar
}
