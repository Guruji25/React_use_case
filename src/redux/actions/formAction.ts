export const UPDATE_CAR_DETAILS = 'UPDATE_CAR_DETAILS';

export const saveCarDetails = (formData: FormData) => ({
    type: UPDATE_CAR_DETAILS,
    payload: formData,
  });