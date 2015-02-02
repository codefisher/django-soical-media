# django-soical-media
Soical Media Buttons for Django

A template tag that generate the needed html for adding soical media share buttons.  The tag contains a JSON string, that defines what buttons to show.

    <ul id="social-media-sidebar" class="social-media-small">
    {% socialmedia %}
    {
        "buttons": ["twitter","googleplus","facebook", "linkedin", "reddit"],
        "url": "{{ request.scheme }}://{{ request.get_host }}{{ request.get_full_path|escapejs }}",
        "title": "{{ title|escapejs }}"
    }
    {% endsocialmedia %}
    </ul>
