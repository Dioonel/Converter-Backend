import joi from 'joi';

const inputFormat = joi.string().valid('png', 'jpg', 'webp', 'jfif', 'jpeg', 'gif', 'tiff');
const outputFormat = joi.string().valid('png', 'jpg', 'webp', 'jpeg', 'gif');

export const ValidInputFormats = joi.object({
    InputFormats: inputFormat.required(),
});

export const ValidOutputFormats = joi.object({
    outputFormat: outputFormat.required(),
});

export type outputFormats = 'png' | 'jpg' | 'webp' | 'jpeg' | 'gif';