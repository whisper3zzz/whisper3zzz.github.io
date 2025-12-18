---
title: C#引用参数的修饰符
date: 2024-01-21 20:58:04
categories: 学习
tags: 
    - C#
path: /posts/csharp-ref-modifiers
---

# **两个常见的简单参数修饰符**

## 1.ref

若要使用 `ref` 参数，方法定义和调用方法均必须显式使用 `ref` 关键字，如下面的示例所示。 （除了在进行 COM 调用时，调用方法可忽略 `ref`。）
    
```c#
void Method(ref int refArgument)
{
    refArgument = refArgument + 44;
}

int number = 1;
Method(ref number);
Console.WriteLine(number);
// Output: 45
```


​    
传递到 `ref` 参数的自变量必须先经过初始化，然后才能传递。

## 2.out

若要使用 `out` 参数，方法定义和调用方法均必须显式使用 `out` 关键字。


```c#
int initializeInMethod;
OutArgExample(out initializeInMethod);
Console.WriteLine(initializeInMethod);     // value is now 44

void OutArgExample(out int number)
{
    number = 44;
}
```


作为 `out` 自变量传递的变量在方法调用中传递之前不必进行初始化。 但是，被调用的方法需要在返回之前赋一个值。必须先在单独的语句中声明变量，然后才能将其作为 `out` 参数传递。 还可以在方法调用的参数列表而不是单独的变量声明中声明 `out` 变量。