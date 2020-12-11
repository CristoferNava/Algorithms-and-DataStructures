from typing import List

def longest_common_prefix(strs: List[str]) -> str:
    # get the smalles string
    if len(strs) == 0:
        return ''
        
    s_str = strs[0]
    for s in strs:
        if len(s) < len(s_str):
            s_str = s

    result = []
    for j in range(len(s_str)):
        flag = True
        for i in range(len(strs) - 1):
            if strs[i][j] != strs[i+1][j]:
                flag = False
                break
        if flag:
            result.append(s_str[j])
        else:
            break
    s = ''
    s = s.join(result)
    return s

longest_common_prefix(["flower","flow","flight"])