def iso(s: str, t: str) -> bool:
    # Tabla de codifacación
    ht = {} # space: O(s)
    # time: O(s)
    for i in range(0, len(s)):
        if t[i] not in ht.values(): # O(27)
            ht[s[i]] = t[i]
            

    # codificar el mensaje
    print(ht)
    message = ''
    for c in s:
        if c in ht.keys():
            message += ht[c]
            
    
    if message == t:
        return True
    else:
        return False

# time: O(s)
# space: O(s)
"""
class Solution {
    public boolean isIsomorphic(String s, String t) {
        HashMap <Character, Character> mp = new HashMap<Character, Character>();
        for(int i=0; i<s.length(); i++){
            if(mp.containsKey(s.charAt(i))){
                if(mp.get(s.charAt(i))!=t.charAt(i)){
                    return false;
                }
            }else{
                if(mp.containsValue(t.charAt(i))){
                    return false;
                }
                mp.put(s.charAt(i)
            }
        }
"""