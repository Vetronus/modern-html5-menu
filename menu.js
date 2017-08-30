var menuIcon = document.getElementById("menu");
var menu = document.getElementById("navBar");

function ToogleMenu()
{
    if(menuIcon.textContent == '=/\\=')
    {
        menuIcon.textContent = '=\\/=';
        menu.style.display = 'none';
    }
    else
    {
        menuIcon.textContent = '=/\\=';
        menu.style.display = 'block';
    }
    
}

menuIcon.addEventListener("click", ToogleMenu)

// Some lorem ispum, i don't know why ?
/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis nunc ac pulvinar malesuada. Phasellus nec orci iaculis, suscipit sem sed, consectetur risus. Nullam odio nunc, rutrum eget pretium sit amet, molestie ac erat. Etiam porta leo eu lacus consequat mollis. Ut non nibh sed justo scelerisque rhoncus vitae eu eros. Duis interdum lacinia est, ac accumsan neque porttitor sed. Aliquam nulla lorem, malesuada sed nunc a, consequat placerat lorem. Proin nec ultrices nisl, nec pellentesque lorem. Praesent sit amet turpis elementum, tempor turpis non, blandit velit. Pellentesque accumsan felis est, a pellentesque nibh dignissim eget. Vestibulum eget enim sit amet risus porta dignissim in vel ligula. Aenean neque dolor, varius ut accumsan viverra, sagittis eget lorem. Morbi sagittis nisi vitae est facilisis tincidunt. Nulla tincidunt iaculis velit, ut convallis mi tempus sagittis.

Aenean arcu neque, maximus ac felis in, pretium porta elit. Duis nisi massa, blandit maximus posuere a, venenatis quis augue. Curabitur eros metus, tempus vitae nisi id, maximus sodales sapien. Vestibulum a feugiat quam. Morbi euismod nulla ac mauris eleifend iaculis. Praesent sodales tristique consectetur. Mauris sollicitudin erat non ligula tempus, et eleifend tortor placerat. Curabitur non justo sit amet velit eleifend feugiat. Morbi pretium est lectus, at malesuada eros rutrum vel. Proin vel sem sit amet est rhoncus venenatis vitae facilisis dolor. Mauris finibus ante et suscipit varius. Donec eget efficitur enim, vulputate porttitor ligula. Donec consequat, magna non efficitur ullamcorper, nibh libero elementum ex, eget vestibulum tellus nisi eget ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla lobortis hendrerit sem, id iaculis ante pretium sed. Morbi eu lacus turpis.

Duis aliquet efficitur justo, at euismod lorem finibus non. Nunc malesuada ipsum vitae nunc condimentum, vel pellentesque nisi consectetur. Proin ac ornare nisi. Nam neque arcu, pretium ac magna in, efficitur iaculis magna. Maecenas vestibulum, arcu ac ultrices rhoncus, neque leo tempus magna, ut maximus nulla ligula non sapien. Maecenas vel justo sed nunc lacinia tempor. In vitae nibh vel metus porta cursus ut sit amet ex. Aliquam libero libero, convallis quis convallis eu, viverra non lectus. Donec purus tellus, porta a purus in, molestie condimentum nisl. Nulla ac risus quis est condimentum consequat. Ut aliquet vel ex vel dignissim.

Duis nec faucibus lorem. Cras non libero aliquet, dignissim nunc et, elementum neque. Sed lacinia ex justo, vel volutpat sapien ultrices at. Donec malesuada sodales nulla, vitae ultrices magna hendrerit ac. Quisque venenatis bibendum dui et luctus. Fusce eget magna ultrices, gravida enim eu, consectetur dolor. Vivamus vitae quam posuere, rhoncus risus eu, rhoncus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non suscipit enim.

Quisque pretium velit quis erat molestie tristique. Suspendisse potenti. Cras volutpat sagittis sapien, et efficitur quam tincidunt et. Etiam porttitor pulvinar ullamcorper. Phasellus finibus ullamcorper molestie. Praesent risus eros, venenatis vitae cursus sit amet, blandit dictum felis. Etiam in sem et felis fringilla euismod. Aliquam auctor leo id magna viverra tristique. Morbi quis sodales lectus, ac blandit augue. Phasellus pellentesque varius consequat. Sed bibendum libero quis porttitor bibendum. Suspendisse maximus augue vel eros efficitur, vel gravida sapien vehicula.

Cras quis iaculis velit, vitae volutpat est. Nulla vehicula magna quis odio condimentum tempus posuere at mauris. Pellentesque tempus tortor lectus, sed convallis lorem finibus id. Aenean diam enim, cursus non lectus quis, tempus pellentesque sem. Integer at suscipit risus. Proin id vestibulum turpis, euismod gravida sapien. Nunc aliquam accumsan mollis. Nulla facilisi. Sed enim odio, euismod at quam et, dignissim feugiat odio. Nam ullamcorper et nibh at porta. Sed pellentesque consequat feugiat. Etiam a consequat diam, a viverra ligula.

Phasellus lectus eros, interdum at mollis in, hendrerit id felis. Proin luctus urna id est egestas aliquet. Nulla et mauris orci. Nunc interdum vel mi eget laoreet. Nullam at scelerisque ipsum. Fusce tempus sit amet urna vitae pellentesque. Phasellus vitae justo mi. Maecenas iaculis ante at ante dictum feugiat. Aliquam erat volutpat. Nullam a hendrerit lectus. Nam vulputate maximus ipsum, eget feugiat augue interdum sit amet. In vel scelerisque lorem. Duis vel lacinia dui, vitae tristique magna.

Duis luctus felis ac ante placerat, eget scelerisque leo tempor. Proin eget ante non nisl condimentum ornare eget imperdiet justo. Vivamus ullamcorper porta velit, eu cursus eros pretium non. Suspendisse nec dui tortor. Etiam vitae velit in enim maximus ornare id vel quam. Aenean euismod bibendum nunc, vitae vulputate arcu molestie et. Nullam fringilla vehicula tristique. Maecenas dapibus tincidunt convallis. Proin nec finibus erat. Fusce ultrices sem nec volutpat fringilla. Morbi porta leo lectus, ac venenatis sem pulvinar at. In quis ipsum sit amet massa tempor accumsan nec vel leo. Nunc efficitur, justo ut facilisis iaculis, mauris leo mollis ante, at suscipit felis lectus non lacus.

Aliquam non condimentum lorem. Vivamus accumsan nisl et gravida mollis. Nunc vel auctor ex, ut rutrum metus. Nullam sit amet risus eu diam rhoncus imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis at dictum nulla, sit amet rutrum dui. Integer in odio aliquet, tempor tortor nec, semper sem.

In malesuada sapien non turpis commodo rutrum. Curabitur rutrum aliquam consequat. Maecenas nec erat luctus, accumsan felis non, bibendum orci. Duis scelerisque ligula sed congue faucibus. Aenean commodo ligula sit amet lectus finibus, a rhoncus quam molestie. Fusce turpis ex, euismod sit amet euismod in, varius a felis. Proin quis metus elit. Curabitur ut orci et nisl viverra consectetur at vitae elit. Proin a pellentesque justo, sed blandit est. Maecenas imperdiet, lectus at lacinia semper, purus nibh blandit nibh, quis suscipit leo leo at velit.
*/