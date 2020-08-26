{{let
title = "The Michuhu Language :  ";
date = "2020-07-16"
}}
{{@md @}}

Michuhu (60 Root) is built from 63 base roots, all words are a compound of these roots, and can be used to form wide range of meanings.

 ( ..60.. )   ..63..  .       .       

For example : 
	Shop =  = Wo Thu Di D = Place Open Own Noun
	Boy =  = Ma So M = Person Small Male


The best place to start understanding the language is to understand the roots, as they each have their own sound, character and meaning.

      .     ,

Here are the documents about the language

{{let bp=(parent $0.build.out_path)}}

[Phonics - ]({{$bp}}/phonics.html)    
[Roots - ]({{$bp}}/roots.html)

[Articles - ]({{$bp}}/articles.html)    
[Adjectives - ]({{$bp}}/adjectives.html)    
[Countables -   ]({{$bp}}/countables.html)    
[Verbs - ]({{$bp}}/verbs.html)    
[Abstract Concepts -  ]({{$bp}}/abstract.html)    
[Living Things -  ]({{$bp}}/living_things.html)    
[Nouns - ]({{$bp}}/nouns.html)    
[Time - ]({{$bp}}/time.html)    

Or the Magic List:
--------------

{{for k v in $0.lang_docs}}
[{{first $v.title "TITLE MISSING"}} - {{first $v.dahufi ""}}](/{{join $bp $v.item_file}})
{{/for}}




{{/md}}
