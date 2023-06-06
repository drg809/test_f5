export const imageToBase64 = (blob: any) => {
   return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
   });
};

export const openImageNewTab = (base: string) => {
   const image = new Image();
   image.src = base;

   window.open("")?.document.write(image.outerHTML)
};