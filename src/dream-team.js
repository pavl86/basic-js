module.exports = function createDreamTeam(members) {
  const isInvalidArgs = !Array.isArray(members) || !members.length || !members.some(el => typeof el === 'string');
  
  if (isInvalidArgs) {
    return false;
  }

  return members.filter(el => typeof el === 'string')
    .map(el => el.trim()[0].toUpperCase())
    .sort()
    .join('');
};
