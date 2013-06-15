// App's Code

var code =
{
	'loading_page'	:
	{
		'update' : function()
		{
			if(engine["touchLayer"] == "rect2")
			{
				engine["touchLayer"] = undefined ;
				alert("rect2") ;
			}
			else if(engine["touchLayer"] == "rect3")
			{
				engine["touchLayer"] = undefined ;
				alert("rect3") ;
			}
			
			else if(engine["touchLayer"] == "rect1")
			{
				// Checking if user stop dragging the layer return false, if layer is dragging mode return true.
				if(drag["mode"] == false)
				{
					engine["touchLayer"] = undefined ;
					alert("rect1") ;
				}
			}
		}
	}
}
