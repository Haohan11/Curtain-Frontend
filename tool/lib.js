export const toArray = (target) => (Array.isArray(target) ? target : [target]);

export const transImageUrl = (path) =>
  typeof path === "string"
    ? `${process.env.NEXT_PUBLIC_BACKENDURL}${path.replace(/\\/g, "/")}`
    : "";

export const onlyNumber = (event) => {
  if (
    /^\d$/.test(event.key) ||
    [
      "Backspace",
      "Delete",
      "Escape",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
      "Enter",
    ].includes(event.key) ||
    (event.ctrlKey && ["a", "x", "c", "v"].includes(event.key))
  )
    return;
  event.preventDefault();
};

export const toFormData = (values) => {
  const formData = new FormData();
  for (const key in values) {
    const value = values[key];
    if (!Array.isArray(value)) {
      formData.append(key, value);
      continue;
    }

    value.forEach((item) => {
      formData.append(
        key,
        typeof item === "object" && !(item instanceof File)
          ? JSON.stringify(item)
          : item
      );
    });
  }
  return formData;
};

export const checkExpires = (time) =>
  !isNaN(time) ? time * 1000 < Date.now() : console.warn("Invalid exp.");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const validateEmail = (email) => emailRegex.test(email);

export const checkShowMode = (router) => {
  return !["true", "false"].includes(router?.query?.showMode) ||
      JSON.parse(router.query.showMode);
};
