def func(**kwargs):
    print(kwargs)

# All calls equivalent
func(a=1, b=42)
func(**{'a': 1, 'b': 42})
func(**dict(a=1, b=42))