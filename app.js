for(var a=1;a<=11;a++)
{
	for(var b=1;b<=10;b++)
	if(b>=4 && b<=7 && a>=3 && a<5 || b>=4 && b<=7 && a>7 && a<10 )
	{
        document.write("\xa0\xa0 ")
	}
	else if(b==10 && a==1)
	{
		document.write("\xa0\xa0\xa0")
	}
	else if(a==11 && b==10)
	{
        document.write("\xa0\xa0")
	} 
	else if(a==6 && b>8)
		document.write("\xa0\xa0\xa0")
	else
	{
        document.write("B")
	}
	for(var g=1;g<=1;g++)
	{
		document.write("\xa0\xa0\xa0\xa0\xa0")
	}
	for(var c=1;c<=10;c++)
	if(a>2 && a<=5 && c<=7 && c>=4)
	{
		document.write("\xa0\xa0\xa0")
	}
	else if(a>7 && c<=7 && c>=4)
	{
		document.write("\xa0\xa0\xa0")
	}
	else
	{
        document.write("A")
	}
	for(var g=1;g<=1;g++)
	{
		document.write("\xa0\xa0\xa0\xa0")
	}
	for(var b=1;b<=10;b++)
	if(b>=4 && b<=7 && a>=3 && a<5 || b>=4 && b<=7 && a>7 && a<10 )
	{
		document.write("\xa0\xa0\xa0")
	}
	else if(b==10 && a==1)
	{
		document.write("\xa0\xa0\xa0")
	}
	else if(a==11 && b==10)
	{
        document.write("\xa0\xa0\xa0")
	} 
	else if(a==6 && b>8)
		document.write("\xa0\xa0")
	else
	{
        document.write("B")
	}
	for(var g=1;g<=1;g++)
	{
		document.write("\xa0\xa0\xa0");
	}
	for(var s=1;s<=10;s++)
	if(a<10 && s>=4 && s<=7)
	{
		document.write("\xa0\xa0\xa0");
	}
	else
	{
        document.write("U")
	}
	document.write("<br />")
}