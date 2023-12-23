import Swal from 'sweetalert2'

export const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  customClass: {
    popup: 'my-toast'
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer
    toast.onmouseleave = Swal.resumeTimer
  }
})

// export const ToastUI = (
//   type: 'info' | 'success' | 'warning' | 'error',
//   title: string,
//   msg: string,
//   dateCreated: Date
// ) => {
//   return Toast.fire({
//     html: `<div class="toast">
//         <div class="alert alert-${type}">
//           <h1 class="text-lg">${title}</h1>
//           <div class="divider"/>
//           <span>${msg}</span>
//             <div class="divider divider-end">ส่งเมือ ${dateCreated.toLocaleDateString()}</div>
//         </div>
//       </div>`
//   })
// }
