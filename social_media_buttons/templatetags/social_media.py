import json
from django import template
from django.utils.safestring import mark_safe

register = template.Library()

BUTTON_TEMPLATES = {
    "twitter": template.loader.get_template('social_media_buttons/buttons/twitter.html'),
}

def do_social_media_buttons(parser, token):
    nodelist = parser.parse(('endsocialmedia',))
    parser.delete_first_token()
    return ButtonsNode(nodelist)

class ButtonsNode(template.Node):
    def __init__(self, nodelist):
        self.nodelist = nodelist
        
    def render(self, context):
        output = self.nodelist.render(context)
        settings = json.loads(output)
        context = template.Context(settings)
        return "".join(BUTTON_TEMPLATES.get(template).render(context) for template in settings.get("buttons", []))

register.tag('socialmedia', do_social_media_buttons)
