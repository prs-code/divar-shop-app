const setCookie = ({ accessToken, refreshToken }) => { 
    document.cookie = `accessToken=${accessToken}; max-age=${ 1 * 24 * 60 * 60}`;// one day age
    document.cookie = `refreshToken=${refreshToken}; max-age=${ 30 * 24 * 60 * 60}`;// 30 day age
};

export { setCookie };