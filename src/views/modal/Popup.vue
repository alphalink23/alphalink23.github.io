<!-- Modal.vue -->
<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">default header</slot>
            </div>
            <div class="modal-body">
              <slot name="body">default body</slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'Modal',
  };
  </script>
  
  <style scoped>
  /* Add styling for the modal */
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-wrapper {
    width: 100%;
    max-width: 600px;
  }
  
  .modal-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
  }
  
  .modal-header,
  .modal-body,
  .modal-footer {
    margin-bottom: 15px;
  }
  </style>
  