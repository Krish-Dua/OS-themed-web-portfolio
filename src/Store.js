import { create } from "zustand";

let zCounter = 1;

const useWindowStore = create((set, get) => ({
  windows: [],
  activeWindowId: null,
openWindow: (id, title, desktopSize) => {
  set((state) => {
    const existing = state.windows.find((w) => w.id === id);

    
    if (existing) {
      return {
        windows: state.windows.map((w) =>
          w.id === id
            ? {
                ...w,
                isMinimized: false,
                zIndex: ++zCounter,
              }
            : w
        ),
        activeWindowId: id,
      };
    }

   
    
    const width = Math.floor(desktopSize.width * 0.7);
    const height = Math.floor(desktopSize.height * 0.7);

   
    const x = Math.floor((desktopSize.width - width) / 2);
    const y = Math.floor((desktopSize.height - height) / 2);
const offset = state.windows.length * 40;
    const newWindow = {
      id,
      title,
      isMinimized: false,
      isMaximized: false,
      zIndex: ++zCounter,
      position: { x:x+offset, y:y+offset },
      size: { width, height },
    };

    return {
      windows: [...state.windows, newWindow],
      activeWindowId: id,
    };
  });
},


  closeWindow: (id) => {
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }));
  },

  focusWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: ++zCounter } : w
      ),
      activeWindowId: id,
    }));
  },

  minimizeWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: true } : w
      ),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }));
  },

  restoreWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: false, zIndex: ++zCounter } : w
      ),
      activeWindowId: id,
    }));
  },

  toggleMaximize: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id
          ? { ...w, isMaximized: !w.isMaximized, zIndex: ++zCounter }
          : w
      ),
      activeWindowId: id,
    }));
  },

  updatePosition: (id, position) => {
    console.log(position);
    set((state) => ({
      windows: state.windows.map((w) => (w.id === id ? { ...w, position } : w)),
    }));
  },

  updateSize: (id, size) => {
    console.log(size)
    set((state) => ({
      windows: state.windows.map((w) => (w.id === id ? { ...w, size } : w)),
    }));
  },
}));

export default useWindowStore;
