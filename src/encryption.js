import { AES } from 'crypto-js';
import CryptoJS from 'crypto-js';

export function encryptString(stringToEncrypt, encryptionKey) {
    const encryptedString = AES.encrypt(stringToEncrypt, encryptionKey).toString();
    const encodedEncryptedString = encodeURIComponent(encryptedString);
    return encodedEncryptedString;
}

export function decryptString(encryptedString, encryptionKey) {
    try {
        const decodedEncryptedString = decodeURIComponent(encryptedString);
        const decryptedBytes = AES.decrypt(decodedEncryptedString, encryptionKey);
        const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
        return decryptedString;
    } catch (error) {
        // If decryption fails, catch the error and return null.
        return null;
    }
}